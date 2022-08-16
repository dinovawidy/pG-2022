<?php

namespace App\Controllers;

use App\Controllers\BaseController;
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
        }
    }

    public function login()
    {
        $jsonrequest = esc($this->request->getJSON(true));

        if ($jsonrequest['username'] === 'bejo' && $jsonrequest['password'] === 'bejo') {
            $status = ResponseInterface::HTTP_ACCEPTED;
            $message = "Welcome Bejo!";
            $jwtPayload = [
                'iat' => Time::now()->getTimestamp(),
                'exp' => Time::now()->addDays(14)->getTimestamp(),
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
