<?php

namespace App\DTO\Response;


use App\DTO\ArrayableDTOInterface;

readonly class ResponseErrorDTO implements ArrayableDTOInterface
{
    public function __construct(
        public string $message
    )
    {
    }

    /**
     * @return string[]
     */
    public function toArray(): array
    {
        return [
            'message' => $this->message
        ];
    }
}
