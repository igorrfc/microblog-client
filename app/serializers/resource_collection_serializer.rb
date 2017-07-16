class ResourceCollectionSerializer
  def self.serialize(collection)
    json_format_collection = collection.as_json

    return [] if !json_format_collection.is_a? Array

    json_format_collection.map { |resource| resource['attributes'] }
  end
end
