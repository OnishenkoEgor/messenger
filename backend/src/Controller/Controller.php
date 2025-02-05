<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

abstract class Controller extends AbstractController
{
    /**
     * @param array $data
     * @param string $status
     * @return JsonResponse
     */
    public function success(array $data = [], string $status = Response::HTTP_OK): JsonResponse
    {
        return $this->json([
            'response' => $data
        ], $status);
    }

    /**
     * @param string $message
     * @param string $status
     * @return JsonResponse
     */
    public function error(string $message, string $status = Response::HTTP_INTERNAL_SERVER_ERROR): JsonResponse
    {
        return $this->json([
            'message' => $message
        ], $status);
    }
}
