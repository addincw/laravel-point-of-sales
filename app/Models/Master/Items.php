<?php

namespace App\Models\Master\Items;

use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
  protected $table = 'items';
  protected $fillable = ['name', 'category_id', 'unit_id'];
}
