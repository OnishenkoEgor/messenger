<?php

namespace App\DTO\Response;

use App\DTO\ArrayableDTOInterface;

readonly class ResponseSuccessDTO implements ArrayableDTOInterface
{
    public function __construct(
        public mixed $response = null
    )
    {
    }

    /**
     * @return array
     */
    public function toArray(): array
    {
        return [
            'response' => $this->response
        ];
    }
}
