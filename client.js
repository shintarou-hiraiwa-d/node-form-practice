document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
      var result = document.getElementById('result');
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.response);
            var data = JSON.parse(xhr.response);
            result.textContent = data.name;
          } else {
            result.textContent = 'サーバーエラーが発生しました。';
          }
        } else {
          result.textContent = '通信中。。。';
        }
      };
  
      xhr.open('POST', 'hello-api', true);
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=utf-8');
      xhr.send('name=' + encodeURIComponent(document.getElementById('name').value));
    }, false);

    document.getElementById('name').addEventListener('keydown', function(e) {
      var x = e.keyCode;
      if (x === 13) {
        var result = document.getElementById('result');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log(xhr.response);
              var data = JSON.parse(xhr.response);
              result.textContent = data.name;
            } else {
              result.textContent = 'サーバーエラーが発生しました。';
            }
          } else {
            result.textContent = '通信中。。。';
          }
        };

        xhr.open('POST', 'hello-api', true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=utf-8');
        xhr.send('name=' + encodeURIComponent(document.getElementById('name').value));
      }
    }, false);
    
  }, false);