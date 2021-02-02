import { Router } from 'express'
import ProductHandler from './handlers/productHandler'
import StoreHandler from './handlers/storeHandler'
import CategoryHandler from './handlers/categoryHandler'
import SaleHandler from './handlers/saleHandler'

const routes = new Router()

routes.get('/product', ProductHandler.index)
routes.post('/product', ProductHandler.post)

routes.post('/store', StoreHandler.post)
routes.get('/store/:id', StoreHandler.show)
routes.get('/store', StoreHandler.index)
routes.get(
  '/store/get-store-by-external-id/:id',
  StoreHandler.getStoreByExternalId
)

routes.get('/category', CategoryHandler.index)
routes.post('/category', CategoryHandler.post)

routes.get('/sale', SaleHandler.index)
routes.post('/sale', SaleHandler.post)

export default routes
