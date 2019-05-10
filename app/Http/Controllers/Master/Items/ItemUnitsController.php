<?php

namespace App\Http\Controllers\Master\Items;

use Illuminate\Http\Request;
use App\Models\Master\Items\ItemUnits;
use App\Http\Controllers\Controller;

class ItemUnitsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ItemUnits::all();
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
        return ItemUnits::create([
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      try {
        return ItemUnits::find($id);
      } catch (\Exception $e) {
        return response()->json(['message' => $e->getMessage()], 500);
      }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      try {
        ItemUnits::find($id)->update([
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      try {
        ItemUnits::find($id)->delete();
      } catch (\Exception $e) {
        return response()->json(['message' => $e->getMessage()], 500);
      }

      return response()->json([], 204);
    }
}
