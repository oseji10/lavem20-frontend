@extends('layouts.session')
@section('content')
<div class="signup4-wrap">
    <div class="signup4-container">
        <div class="card">
            <div class="card-body p-0">
                <div class="row m-0">
                    <div class="col-md-6 d-flex justify-content-center p-xxl gray-300">
                        <img class="" src="{{  asset('images/illustrations/posting_photo.svg')}}">
                    </div>
                    <div class="col-md-6 gray-200 py-lg">
                        <div class="input-group  input-light mb-3">
                            <input type="text" class="form-control" placeholder="Username">
                        </div>
                        <div class="input-group  input-light mb-3">
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="input-group  input-light mb-3">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="input-group  input-light mb-md">
                            <div class="mb-md custom-control custom-checkbox checkbox-light">
                                <input type="checkbox" class="custom-control-input" id="customCheck7">
                                <label class="custom-control-label" for="customCheck7">I agree with terms and
                                    condtions.</label>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-raised btn-raised-primary mr-md">Sign Up</button>
                            <p class="mb-0 mr-md">or</p>
                            <a href="#">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection