<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class TestController extends Controller
{
    public function getClients(){
        $data = [
            'pageTitle' => 'Clients',
            'category' => 'pages',
            'subCategory' => '',
            'pageName' => 'Clients',

         ];
        $theUrl     = config('app.guzzle_test_url').'/api/client/';
        $clients   = Http ::get($theUrl)->collect();
        // return $clients;
        return view('widgets.table', ($data), ['clients' => $clients]);

    //     $data['departments'] = Department::get(["department_name", "id"]);
    //   return view('content.pages.ecf.add-ecf', $data);

     }
}
