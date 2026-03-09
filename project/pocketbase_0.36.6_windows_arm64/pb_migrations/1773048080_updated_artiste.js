/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // remove field
  collection.fields.removeById("number979872100")

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text979872100",
    "max": 0,
    "min": 0,
    "name": "horraire",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number979872100",
    "max": null,
    "min": null,
    "name": "horraire",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("text979872100")

  return app.save(collection)
})
