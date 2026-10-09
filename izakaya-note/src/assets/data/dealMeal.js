import { results as _results, header  as _header } from './meal.js'
 // 食材数量为5个的料理，自动在正特性中追加"大份"
    const addLargePortion = (list) => {
        list.forEach(item => {
            if (item['食材'] && item['食材'].split('、').length === 5 && !item['正特性'].split('、').includes('大份')) {
                item['正特性'] += '、大份'
            }
        })
        return list
    }

    export const results = addLargePortion(_results)
    export const header = _header