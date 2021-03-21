
export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Совершенный код',
            author: 'Макконнелл Стив',
            price: 1815,
            coverImage: 'https://img3.labirint.ru/rc/e89472bedcbd422f578c8eb2aa6d8808/220x340/books28/272529/cover.jpg?1563607723'
        },
        {
            id: 2,
            title: 'Выразительный JavaScript',
            author: 'Марейн Хавербеке',
            price: 2027,
            coverImage: 'https://img4.labirint.ru/rc/0d0e02465e4503eb40e101998bfa5a5a/220x340/books71/707678/cover.jpg?1563699914'
        }
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happend'))
                } else { resolve(this.data) }
            }, 700)
        })
    }
}