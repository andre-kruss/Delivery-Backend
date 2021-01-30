import { Router } from 'express'
import ProductController from './handlers/productHandler'

const routes = new Router()

routes.get('/products', ProductController.index)

export default routes
