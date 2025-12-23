
function Privat() {
    return (
    <>

 <Routes>
   <Route path="/login" element={<LoginForm />} />
   <Route element={<PrivateRoute />}> {/* Ini adalah route guard */}
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/settings" element={<Settings />} />
   </Route>
 </Routes>
    </>
    )
}

export default Privat