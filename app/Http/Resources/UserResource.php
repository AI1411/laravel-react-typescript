<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\User */
class UserResource extends JsonResource
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'image' => $this->image,
            'location' => $this->location,
            'introduction' => $this->introduction,
            'github' => $this->github,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
