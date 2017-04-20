@extends('layouts.app')

@section('content')

    <div class="row">
      <div class="col-xs-8 col-xs-offset-2">
        <h1>新規作成ページ</h1>
      
        {!! Form::model($jstest, ['route' => 'js.store']) !!}
          <div class="form-group">
            {!! Form::label('user', 'お名前:') !!}
            {!! Form::text('user', null, ['class' => 'form-control']) !!}
          </div>
          <div class="form-group">    
            {!! Form::label('content', '投稿内容:') !!}
            {!! Form::textarea('content', null, ['class' => 'form-control']) !!}
          </div>
          {!! Form::submit('投稿します！', ['class' => 'btn btn-success']) !!}
        {!! Form::close() !!}
      </div>
    </div>

    <p>
      <div id="memory"></div>
      <button type="button" id="my-button">くじ引き</button>
    </p>
    

@endsection