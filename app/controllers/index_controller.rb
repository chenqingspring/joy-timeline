require 'dropbox_sdk'
require 'json'

class IndexController < ApplicationController
  def joy
    client = DropboxClient.new("ouIEkUpgbqAAAAAAAAASAel11n0kiwFIXmeO83AXOv-cCMkBWsIXV1NJBBmlXnAq")
    metadata =  client.metadata('/joy')
    contents = metadata['contents']
    paths = []
    contents.each do |content|
      paths.push(content['path'])
    end
    @paths = paths.join(',')
  end
end
