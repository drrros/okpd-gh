import React from 'react'

export default function ResultsTable(props) {
    return (
        <div className="container-fluid">
            <table className="table table-sm table-bordered table-hover table-responsive"
                   style={{width: 'auto !important'}}>
                <thead>
                <tr>
                    <th scope="col">Код</th>
                    <th scope="col">Количество записей в КТРУ</th>
                    <th scope="col">Отменён</th>
                    <th scope="col">Запреты</th>
                    <th scope="col">Ограничения</th>
                    <th scope="col">Преимущества</th>
                    <th scope="col">Допуск</th>
                    <th scope="col">Аукционный перечень</th>
                    <th scope="col">Электронная форма 223-ФЗ</th>
                    <th scope="col">Типовой контракт</th>
                    <th scope="col">Энергоэффективность</th>
                    <th scope="col">Перечень ТРУ, производимых УИС</th>
                    <th scope="col">Не размещается в ЕИС</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.processedOkpds.map(okpd => {
                        return (
                            <tr key={okpd.data.id}>
                                <td>
                                    <a href={`https://zakupki.gov.ru/epz/ktru/search/results.html?searchString=${okpd.data.okpd}&morphology=on`}>{okpd.data.okpd}</a>
                                </td>
                                <td className="text-center">
                                    {okpd.data.ktru_records_count}
                                </td>
                                <td className="text-center">
                                    {okpd.data.isCanceled ? '✔' : null}
                                </td>
                                <td className="text-center">
                                    {okpd.data.zapret === '1' ? '✔' : null}
                                </td>
                                <td className="text-center">
                                    {okpd.data.ogranichenia === '1' ? '✔' : null}
                                </td>
                                <td className="text-center">
                                    {okpd.data.preimuschestvo === '1' ? '✔' : null}
                                </td>
                                <td className="text-center">
                                    {okpd.data.dopusk === '1' ? '✔' : null}
                                </td>
                                <td className="text-center">
                                    {okpd.data.perechen === '1' ? '✔' : null}
                                </td>
                                <td className="text-center">
                                    {okpd.data.forma === '1' ? '✔' : null}
                                </td>
                                <td className="text-center">
                                    {okpd.data.tk === '1' ? '✔' : null}
                                </td>
                                <td className="text-center">
                                    {okpd.data.efektivnost === '1' ? '✔' : null}
                                </td>
                                <td className="text-center">
                                    {okpd.data.perechenTryUIS === '1' ? '✔' : null}
                                </td>
                                <td className="text-center">
                                    {okpd.data.nepubl === '1' ? '✔' : null}
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

