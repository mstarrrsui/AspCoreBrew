using Microsoft.EntityFrameworkCore;

namespace AspCoreBrew.Model
{
    public class IngredientsContext : DbContext
    {
        public IngredientsContext(DbContextOptions<IngredientsContext> options)
            : base(options)
        {
        }

        public DbSet<Hop> Hops { get; set; }

    }
}