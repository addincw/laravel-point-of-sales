<?php

namespace App\Models\Master\Items;

use Illuminate\Database\Eloquent\Model;

class ItemUnits extends Model
{
  protected $table = 'item_units';
  protected $fillable = ['name', 'code', 'is_active'];
}
