using RomanAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanAPI.Interfaces
{
    interface IUsuarioRepository
    {
        Usuario Login(string email, string senha);


    }
}
