using RomanAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanAPI.Interfaces
{
    interface IProjetoRepository
    {
        void Cadastrar(Projeto novoProjeto);
        List<Projeto> Listar();
    }
}
