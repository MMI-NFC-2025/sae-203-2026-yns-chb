/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2236279412")

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_306139441",
    "hidden": false,
    "id": "relation939306730",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "id_scene",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2236279412")

  // remove field
  collection.fields.removeById("relation939306730")

  return app.save(collection)
})
