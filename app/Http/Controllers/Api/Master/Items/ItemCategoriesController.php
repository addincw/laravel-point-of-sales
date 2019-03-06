<?php

namespace App\Http\Controllers\Api\Master\Items;

use App\Models\Master\Items\ItemCategories;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ItemCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ItemCategories::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
          return ItemCategories::create([
            'name' => $request->name,
            'code' => $request->code,
            'is_active' => $request->is_active
          ]);
        } catch (\Exception $e) {
          return response()->json(['message' => $e->getMessage()], 500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Master\Items\ItemCategories  $itemCategories
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
          return ItemCategories::find($id);
        } catch (\Exception $e) {
          return response()->json(['message' => $e->getMessage()], 500);
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Master\Items\ItemCategories  $itemCategories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      try {
        ItemCategories::find($id)->update([
          'name' => $request->name,
          'code' => $request->code,
          'is_active' => $request->is_active
        ]);

        return response()->json([], 204);
      } catch (\Exception $e) {
        return response()->json(['message' => $e->getMessage()], 500);
      }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Master\Items\ItemCategories  $itemCategories
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
          ItemCategories::find($id)->delete();
        } catch (\Exception $e) {
          return response()->json(['message' => $e->getMessage()], 500);
        }

        return response()->json([], 204);
    }
}
