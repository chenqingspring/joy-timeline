require 'dropbox_sdk'
require 'json'

class IndexController < ApplicationController
  def joy
    client = DropboxClient.new("ouIEkUpgbqAAAAAAAAASAel11n0kiwFIXmeO83AXOv-cCMkBWsIXV1NJBBmlXnAq")
    metadata =  client.metadata('/joy')
    contents = metadata['contents']
    links = []
    contents.each do |content|
      path = client.media(content['path'])
      links.push(path['url'])
    end
    @images = links.join(',')
  end
end
