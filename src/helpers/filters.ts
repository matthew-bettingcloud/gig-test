import { Game } from "../models/Game";

export function searchFilter(games: Game[], searchText: string) {
    return games.filter(game => {
        return game.name.toLowerCase().includes(searchText.toLocaleLowerCase());
    })
}

export function categoryFilter(games: Game[], categoryId: number) {
    return games.filter(game => {
        return game.categories.some(item => item.categoryId === categoryId)
    });
}

export function alphabeticSort(games: Game[]) {
    return games.sort((gameA, gameB) => {
        if(gameA.name.toLowerCase() < gameB.name.toLowerCase()) { 
            return -1 
        } else {
            return 1;
        }
    });
}

export function popularitySort(games: Game[]) {
    // Sort the categories first
    for(let i = 0; i <= games.length -1 ; i++) {
        games[i].categories = games[i].categories.sort((catA, catB) => {
            if (!catA.orderNumber) {
                catA.orderNumber = 99999;
            }

            if (!catB.orderNumber) {
                catB.orderNumber = 99999;
            }

            if (catA.orderNumber < catB.orderNumber) {
                return -1;
            } else {
                return 1;
            }
        })
    }

    // Sort the games with the categories already sorted
    return games = games.sort((gameA, gameB) => {
        if (gameA.categories.length === 1 && !gameA.categories[0].orderNumber) {
            gameA.categories[0].orderNumber = 999;
        }
        
        if (gameB.categories.length === 1 && !gameB.categories[0].orderNumber) {
            gameB.categories[0].orderNumber = 999;
        }

        if (gameA.categories[0].orderNumber! < gameB.categories[0].orderNumber!) {
            return -1;
        } else {
            return 1;
        }
    });
}