import { shallowMount, mount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe( 'Indecision Component ', () => {

    let wrapper

    beforeEach( () => {
        wrapper = shallowMount( Indecision )
    })

    test('debe de hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })
})