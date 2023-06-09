<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <base href="" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        {{-- Page Title --}}
        <title>{{ config('app.name') }} LAVEMS | @yield('title', $pageTitle ?? '')</title>
        {{-- favicon --}}
        <link rel="icon" type="image/x-icon" href="{{asset('storage/img/favicon.ico')}}" />
        {{-- Material font Icons --}}
        <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" />
        {{-- Google Fonts --}}
        <link
            href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;display=swap"
            rel="stylesheet" />


        {{-- Fontawesome --}}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />

        {{-- Common css styles --}}
        <link rel="stylesheet" href="{{asset('css/vendors.bundle.min.css')}}" />

        <!--Page Level Styles -->
        @include('layouts.pages.styles')

        {{-- Common css styles --}}
        <link rel="stylesheet" href="{{asset('css/main.bundle.css')}}" />

        {{-- <link rel="stylesheet" href="{{asset('css/pages/dashboard/analytic.css')}}" /> --}}


        {{--Extra  page specific css if needed--}}
        @yield('page-css')
    </head>

    <body>
        <div class="app-admin-wrap-layout-1 sidebar-full sidebar-theme-slate subheader-fixed">
            @include('layouts.large-sidebar.sidebar')
            <div class="main-content-wrap">
                @include('layouts.large-sidebar.header')
                <!-- Start:: content body-->
                <div class="main-content-body">
                    <!-- Start:: content (Your custom content)-->
                    {{-- Breadcrumb --}}
                    @include('layouts.large-sidebar.breadcrumb')

                    {{-- main page content start here  --}}
                    <div class="container my-lg">
                        @yield('content')
                    </div>

                    <!-- Start:: content (Your custom content)-->
                    <!-- Start:: Footer-->
                    {{-- @include('layouts.large-sidebar.footer') --}}
                    <!-- End:: Footer-->
                </div>
                <!-- End:: content body-->
            </div>
            {{-- customizer --}}
            {{-- @include('layouts.common.customizer') --}}
        </div>


        <!--begin::sidebar-panel-notification-->
        @include('layouts.common.notification-drawer')
        <!--end::sidebar-panel-notification-->
        <!--Sidebar panel Profile-->
        @include('layouts.common.profile-drawer')
        <!--end::sidebar-panel-Profile-->
        <div class="ul-sidebar-panel-overlay"></div>
        <script src="{{asset('js/vendors.bundle.min.js')}}"></script>
        <script src="{{asset('js/layout1-main-bundle.js')}}"></script>
        @include('layouts.pages.scripts')
        @yield('page-js')
        {{-- <script src="{{asset('js/pages/dashboard/analytic2.js')}}"></script> --}}
    </body>

</html>
