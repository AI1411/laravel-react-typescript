<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatePostRequest extends FormRequest
{
    public function rules()
    {
        return [
            'title' => ['required', 'max:100'],
            'body' => ['required', 'max:10000'],
            'category_id' => ['required', 'integer']
        ];
    }

    public function authorize()
    {
        return true;
    }
}
