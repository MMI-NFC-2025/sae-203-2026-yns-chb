/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // update collection data
  unmarshal({
    "name": "artistes"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // update collection data
  unmarshal({
    "name": "artiste"
  }, collection)

  return app.save(collection)
})
