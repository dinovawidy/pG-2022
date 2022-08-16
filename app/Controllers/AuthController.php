<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UserModel;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\I18n\Time;
use Firebase\JWT\JWT;

class AuthController extends BaseController
{
    public function registerAccount()
    {
        $jsonrequest = esc($this->request->getJSON(true));

        if ($jsonrequest['password'] !== $jsonrequest['confirm_password']) {
            $status = ResponseInterface::HTTP_NOT_ACCEPTABLE;
            $message = "Password and confirmation password doesn't match";
            return $this->response->setJSON([
                'status' => $status,
                'message' => $message
            ])->setStatusCode($status);
        } else {
            $uModel = new UserModel();
            $uModel->insert([
                'username' => $jsonrequest['username'],
                'password' => password_hash($jsonrequest['password'], PASSWORD_BCRYPT),
                'name' => $jsonrequest['name'],
                'address' => "",
                'role' => 0
            ]);

            $errors = $uModel->errors();
            if (empty($errors)) {
                $status = ResponseInterface::HTTP_CREATED;
                $message = "Account registered successfully, please login using that account";

                return $this->response->setJSON([
                    'status' => $status,
                    'message' => $message
                ])->setStatusCode($status);
            } else {
                $status = ResponseInterface::HTTP_NOT_ACCEPTABLE;
                $message = "Field error detected, please refer to the errors";

                return $this->response->setJSON([
                    'status' => $status,
                    'message' => $message,
                    'errors' => $errors
                ]);
            }
        }
    }

    public function login()
    {
        $jsonrequest = esc($this->request->getJSON(true));

        $uModel = new UserModel();
        $uCandidate = $uModel->where('username', $jsonrequest['username'])->first();

        if (!empty($uCandidate) && password_verify($jsonrequest['password'], $uCandidate['password'])) {
            $status = ResponseInterface::HTTP_ACCEPTED;
            $message = "Welcome Bejo!";
            $jwtPayload = [
                'iat' => Time::now()->getTimestamp(),
                'exp' => Time::now()->addHours(2)->getTimestamp(),
                'user_id' => 1
            ];

            $token = JWT::encode($jwtPayload, env('JWT_SECRET_TOKEN_KEY'), 'HS256');

            return $this->response->setJSON([
                'status' => $status,
                'message' => $message,
                'jwt_token' => $token
            ])->setStatusCode($status);
        } else {
            $status = ResponseInterface::HTTP_NOT_ACCEPTABLE;
            $message = "Username or password false";
            return $this->response->setJSON([
                'status' => $status,
                'message' => $message
            ])->setStatusCode($status);
        }
    }
}
