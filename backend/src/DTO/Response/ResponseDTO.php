<?php

namespace App\DTO\Response;


readonly class ResponseDTO
{
    public function __construct(
        public string $message,
        public mixed  $data
    )
    {
    }
}
