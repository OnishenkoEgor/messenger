<?php

namespace App\Controller;

use App\DTO\Response\ResponseErrorDTO;
use App\DTO\Response\ResponseSuccessDTO;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class Controller extends AbstractController
{
    public function success(ResponseSuccessDTO $responseDTO, string $status = Response::HTTP_OK): JsonResponse
    {
        return $this->json($responseDTO->toArray(), $status);
    }

    public function error(ResponseErrorDTO $responseDTO, string $status = Response::HTTP_INTERNAL_SERVER_ERROR): JsonResponse
    {
        return $this->json($responseDTO->toArray(), $status);
    }
}
