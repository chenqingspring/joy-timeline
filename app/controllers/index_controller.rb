require 'dropbox_sdk'

class IndexController < ApplicationController
  def joy
    @message = 'Hello, how are you today?'
    client = DropboxClient.new("ouIEkUpgbqAAAAAAAAASAel11n0kiwFIXmeO83AXOv-cCMkBWsIXV1NJBBmlXnAq")
    metadata =  client.metadata('/joy')
    contents = metadata['contents']
    links = []
    contents.each do |content|
      path = client.media(content['path'])
      links.push(path['url'])
    end
    @images = links
  end
end
