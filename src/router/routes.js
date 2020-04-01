import ModalPanel from "@/components/ModalPanel/ModalPanel";

export default [
    // {
    //     path: '/',
    //     redirect: '/tiles'
    // },
    {
        path: '/modal/:tileId',
        component: ModalPanel,
        props: true,
    }]
