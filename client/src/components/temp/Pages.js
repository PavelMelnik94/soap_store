import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useContext} from "react";
import {Pagination} from "react-bootstrap";

const Pages = () => {
    const {device} = useContext(Context)

    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination className='mt-5'>
            {pages.map(page =>
            <Pagination.Item onClick={() => device.setPage(page)} active={device.page === page} key={page}>{page}</Pagination.Item>
            )}

        </Pagination>
    )
}

export default observer(Pages);