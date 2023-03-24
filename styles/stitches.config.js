import { createStitches } from '@stitches/react';
import {createCss} from 'react@stitches/react'

const {styled, css} = createStitches()

export {styled, css} ; createCss({
    conditions: {
        sm: '@media (max-width: 999px)'
    }

});

