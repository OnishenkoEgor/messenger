<?php

namespace App\Controller\Chat;

use App\Controller\Controller;
use App\DTO\Response\ResponseErrorDTO;
use App\DTO\Response\ResponseSuccessDTO;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/chat')]
class ChatListController extends Controller
{
    public function __invoke()
    {
        try {
            return $this->success(new ResponseSuccessDTO());
        } catch (\Throwable $exception) {
            return $this->error(new ResponseErrorDTO($exception->getMessage()));
        }
    }
}
