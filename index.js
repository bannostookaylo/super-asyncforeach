module.exports = async ( array, callback ) => {

    if( array !== undefined ) {

        let index = 0;

        loop:
        for (;array[index];) {

            let results = await callback(array[index], index, array);

            switch ( results ) {

                case 'break':

                    break loop

                break;

                case 'redo':

                    index = index;

                break;

                default:

                    index = index + 1;

                break;

            }

        }

    }

}
