const { Router } = require('express')
const Todo = require('../views/models/Todo')
const Diary = require('../views/models/diaryAdd')


const router = Router()
router.get('/', (req, res) => {


    res.render('index', {
    isIndex: true,

})
})
router.get('/create', (req, res) => {
    res.render('create', {
        isCreate: true
    })
})
router.get('/imt', (req, res) => {
    res.render('imt' , {
    isIndex: true
})
})
router.get('/diary', (req, res) => {
    res.render('diary' , {
    isIndex: true
})
})
router.get('/dish', (req, res) => {
    res.render('dish' , {
    isIndex: true
})
})
router.get('/dishshow', async (req, res) => {
    const todos = await Todo.find({}).lean()
    res.render('dishshow' , {
        title: 'Todo list2',
    isIndex: true,
    todos
})
})
router.get('/dishadd', (req, res) => {
    res.render('dishadd' , {
        title: 'Todo list',
    isIndex: true
})
})
router.post('/dishadd', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    })
await todo.save()
res.redirect('/dishshow')
})

router.get('/diaryshow', async (req, res) => {
    const diaryshow = await Diary.find({}).lean()
    res.render('diaryshow' , {
        title: 'Todo list2',
    isIndex: true,
    diaryshow
})
})

router.get('/diary', (req, res) => {
    res.render('diary' , {
        title: 'Todo list',
    isIndex: true
})
})
router.post('/diary', async (req, res) => {
    const diary = new Diary({
        title: req.body.title
    })
await diary.save()
res.redirect('/diaryshow')
})
router.post('/complete', async (req, res) => {
    const todo = await Todo.findById(req.body.id)
  
    todo.completed = !!req.body.completed
    await todo.save()
  
    res.redirect('/diaryshow')
  })

module.exports = router