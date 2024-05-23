/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("njksthp041r6qeh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nshejjxe",
    "name": "business",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("njksthp041r6qeh")

  // remove
  collection.schema.removeField("nshejjxe")

  return dao.saveCollection(collection)
})
