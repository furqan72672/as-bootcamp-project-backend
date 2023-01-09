const Controller=require( '../../../controllers/admin/appointment.controller')
const express=require('express')
const router=express.Router()

router.get('/list',Controller.list)
router.patch('/edit/:id',Controller.edit)

module.exports = router