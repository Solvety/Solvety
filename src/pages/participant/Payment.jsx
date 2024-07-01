
function Payment({heading,list1, list2}) {
  return (
    <div className="payment-box">
        <h2>{heading}</h2>
        <p>{list1}</p>
        {list2? <p>{list2}</p>:''}
        <p>Verify</p>
    </div>
  )
}
export default Payment