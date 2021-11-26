using Microsoft.EntityFrameworkCore;
using RomanAPI.Contexts;
using RomanAPI.Domains;
using RomanAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanAPI.Repositories
{
    public class ProjetoRepository : IProjetoRepository
    {
        RomanContext ctx = new RomanContext();
        public void Cadastrar(Projeto novoProjeto)
        {
            ctx.Projetos.Add(novoProjeto);

            ctx.SaveChanges();
        }

        public List<Projeto> Listar()
        {
            return ctx.Projetos
          .Include(p => p.IdTemaNavigation)
          .ToList();
        }
    }
}
