/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306139441")

  // remove field
  collection.fields.removeById("relation3503243317")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306139441")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_223627941",
    "hidden": false,
    "id": "relation3503243317",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "se_produit",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
