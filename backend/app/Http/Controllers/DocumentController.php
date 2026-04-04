<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function upload(Request $request)
    {
        if ($request->hasFile('file')) {

            $file = $request->file('file');
            $path = $file->storeAs('uploads', $file->getClientOriginalName());

            // تشغيل سكريبت Python
            $command = "python " . base_path('scripts/python_script.py');
            shell_exec($command);

            return response()->json([
                'message' => 'File uploaded & processed'
            ]);
        }

        return response()->json(['error' => 'No file'], 400);
    }

    public function results()
    {
        $path = storage_path('app/Excel/documents_classes.xlsx');

        return response()->download($path);
    }
}
