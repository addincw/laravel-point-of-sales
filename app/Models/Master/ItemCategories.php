<?php

namespace App\Models\Master\Items;

use Illuminate\Database\Eloquent\Model;

class ItemCategories extends Model
{
    protected $table = 'item_categories';
    protected $fillable = ['name', 'code', 'is_active'];
}
