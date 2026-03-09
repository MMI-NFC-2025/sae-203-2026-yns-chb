/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // add field
  collection.fields.addAt(8, new Field({
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
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // remove field
  collection.fields.removeById("relation939306730")

  return app.save(collection)
})
