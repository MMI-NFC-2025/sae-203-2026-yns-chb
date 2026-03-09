/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2236279412")

  // update collection data
  unmarshal({
    "name": "Artiste"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2236279412")

  // update collection data
  unmarshal({
    "name": "artiste"
  }, collection)

  return app.save(collection)
})
