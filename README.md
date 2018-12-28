# Form-Practice in Node.js
Node.js の学習のために作られたフォームです。  

## Description
フォームに入力、送信された内容が、フォーム下部に表示されます。入力内容は、クエリ情報としてサーバーに POST され、クライアントは、JSON形式で取得します。  

## Requirement
- Node.js  

## Usage manual
### Node.js のインストール
[公式サイト](https://nodejs.org/ja/)から、インストーラーを入手し、Node.js をインストールします。  

### Repository を clone する
コマンドラインを起動して、Repository を clone したいディレクトリへ移動します。  
```
$ cd cloneしたいディレクトリ
```  
以下のコマンドを入力し、clone します。  
```
$ git clone https://github.com/shintarou-hiraiwa-d/node-form-practice.git
```  
なお、Git をインストールしていない場合は、Clone or download からZIP形式でダウンロードすることもできます。

### サーバーを起動する
clone したディレクトリに、node-form-practice という名前のフォルダが作成されていることを確認します。その上で、先程と同様に、そのディレクトリに移動します。  
その後、以下のコマンドを入力します。  
```
$ node server.js
```  

### 正常に動作しているか確認する
ブラウザで http://localhost:80/hello-form.html を開きます。  
表示されたフォームに入力し、送信した後、フォーム下部に表示されることを確認します。  
