@extends('layouts.entry')

@section('content')

<h2 class="doc-section-title" id="examples">Transactions</h2>
<div class="doc-example">
    <div class="table-responsive p-md">
        <table class="table borderless table-hover">

            <thead>
                {{-- {{$clients}} --}}
                @livewire('show-clients')

                <tr>

                    <th scope="col" class="text-muted border-0">Client ID</th>
                    <th scope="col" class="text-muted border-0">Client Name</th>
                    <th scope="col" class="text-muted border-0">Phone Number</th>
                    <th scope="col" class="text-muted border-0">Email</th>
                    <th scope="col" class="text-muted border-0">Registered By</th>
                </tr>
            </thead>
            <tbody class="shadow">
                @foreach ($clients as $data)
                <tr>

                    <td class="align-middle  border-0">{{$data['client_id']}}</td>
                    <td scope="row" class="align-middle border-0">
                        <span class="font-weight-semi">{{$data['name']}}</span>
                    </td>
                    <td class="align-middle border-0">
                        <span class="font-weight-semi">{{$data['phone_number']}}</span>
                    </td>
                    <td class="align-middle border-0">
                        <span class="font-weight-semi">{{$data['email']}}</span>
                    </td>
                    <td class="align-middle border-0">
                        {{-- <span class="badge badge-opacity badge-warning rounded-circle badge-xs"> --}}
                            <span class="font-weight-semi">{{$data['registered_by']}}</span>
    </div>
    </span>
    </td>
</tr>
@endforeach

    </tbody>
</table>


@endsection
