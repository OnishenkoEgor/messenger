<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class MainController
{
    #[Route('/')]
    public function test(): JsonResponse
    {
        return new JsonResponse(json_encode(['res' => 'test'], true), 200);
    }
}
